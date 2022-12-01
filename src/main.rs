use yew::prelude::*;

#[function_component(Main)]
fn app() -> Html {
    html! {
        <div class = "abc" >
            <h1>{"Hello World!"}</h1>
        </div>
    }
}

fn main() {
    yew::Renderer::<Main>::new().render();
}