// Js is for add a class of 'show' to the div as soon is completely visible in the viewport

const items = document.querySelectorAll("#timeline li");

const isInViewport = (el) => {
  return true;
  
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWhith || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      // Check if the item is already visible
      if (item.classList.contains("show")) {
        return;
      }
      item.classList.add("show");
      console.log(item.id)

      const styleId = `style-${item.id}`;
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          #${item.id}.show::before {
            background: var(--secondary-color) url("img/logos/${item.id}.png") no-repeat center;
            background-size: cover;
            transform: scale(7); 
            transform-origin: center;
              content: "";
            display: block; 
            top: 50px;
            background-color: white;
            
          }
        `;
        console.log(style.textContent);
        document.head.appendChild(style);
      }

    }
  });
run()
// Events
// window.addEventListener("load", run);
// window.addEventListener("resize", run);
// window.addEventListener("scroll", run);
