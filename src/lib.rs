use wasm_bindgen::prelude::*;
use base64;
use std::str;

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}

#[wasm_bindgen]
pub fn decodeJwt(token: &str) -> String {
    let split_encoded_string = token.split(".");
    let vec_splitted_string = split_encoded_string.collect::<Vec<_>>();
    let decode_base64 = base64::decode(vec_splitted_string[1]).unwrap();
    let decoded_string = String::from(str::from_utf8(&decode_base64).unwrap());

    return decoded_string;
}
