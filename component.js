class Component extends HTMLElement {
   constructor() {
      super();

      const shadow = this.attachShadow({ mode: "open" });

      const circle = document.createElement("div");
      circle.setAttribute("class", "custom");

      const style = document.createElement("style");
      style.textContent = `
         .custom {
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background-color: #ff0000;
         }
      `

      shadow.appendChild(style);
      shadow.appendChild(circle);
   }
}

customElements.define("custom-component", Component);
