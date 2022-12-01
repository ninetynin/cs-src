use std::io;
use std::path::Path;
use gloo_net::eventsource::futures::EventSource;
use wasm_bindgen_futures::spawn_local;
use futures::{stream, StreamExt};