const commands = {
  clone: `<span class="comment"># Get the repository</span>
git clone https://github.com/tdupoiron/sandbox.git
cd sandbox`,
  docker: `<span class="comment"># Build the example container</span>
docker build -f docker/Dockerfile -t sandbox .
docker run --rm sandbox`,
};

const plainCommands = {
  clone: "git clone https://github.com/tdupoiron/sandbox.git\ncd sandbox",
  docker: "docker build -f docker/Dockerfile -t sandbox .\ndocker run --rm sandbox",
};

const tabs = document.querySelectorAll("[data-command]");
const commandBlock = document.querySelector("#setup-command");
const copyButton = document.querySelector(".copy-button");
let activeCommand = "clone";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCommand = tab.dataset.command;
    commandBlock.innerHTML = commands[activeCommand];

    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", selected.toString());
    });
  });
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(plainCommands[activeCommand]);
    copyButton.querySelector("span").textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.querySelector("span").textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.querySelector("span").textContent = "Select text";
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();
