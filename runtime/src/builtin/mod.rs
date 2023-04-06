pub(crate) mod mashin_core_client;
mod state;

const VERSION: &str = env!("CARGO_PKG_VERSION");
const AUTHORS: &str = env!("CARGO_PKG_AUTHORS");

/// Show meta information about AuraeScript.
#[allow(unused)]
fn about() {
    println!("\n");
    println!("Atmosphere. Distributed Runtime.");
    println!("Authors: {AUTHORS}");
    version();
    println!("\n");
}

/// Show version information.
fn version() {
    println!("Version: {VERSION}");
}
