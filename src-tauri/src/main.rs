// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::process::exit;

#[cfg(any(windows, target_os = "macos"))]
use tauri::Manager;
use window_shadows::set_shadow;
use tauri::SystemTray;


fn main() {
  let tray = SystemTray::new();
  let _app = tauri::Builder::default()
    .system_tray(tray)
    .setup(
      |app| {
        let _splashscreen_window: tauri::Window = app.get_window("splashscreen").unwrap();
        let _main_window: tauri::Window = app.get_window("main").unwrap();

        #[cfg(debug_assertions)]
        {
          _main_window.open_devtools();
        }

        tauri::async_runtime::spawn(async move {
          println!("Initializing...");
          set_shadow(&_splashscreen_window, true).unwrap();
          std::thread::sleep(std::time::Duration::from_secs(2));
          println!("Done initializing.");
          _splashscreen_window.close().unwrap();
          _main_window.show().unwrap();
          _main_window.set_always_on_top(false).unwrap();
        }

      );
        Ok(())
      }
    )
    .on_window_event(|event| match event.event() {
          tauri::WindowEvent::CloseRequested { api, .. } =>{
              api.prevent_close();
              tauri::Window::emit_all(event.window(), "close", "payload").unwrap();
              tauri::api::dialog::confirm(
                Some(&event.window()), "Intelligent Audit Tools", "确定退出?",
                |answer: bool|{
                  if answer {
                    exit(1);
                  }
              })
          },
          _ => {}
      }
    )
    .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}



#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
  if let Some(splashscreen) = window.get_window("splashscreen") {
    splashscreen.close().unwrap();
  }
  window.get_window("main").unwrap().show().unwrap();
}
