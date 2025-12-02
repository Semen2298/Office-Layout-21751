import 'flowbite';
import '../css/style.css';

document.querySelectorAll("[data-lang]").forEach((wrapper) => {
    const toggle = wrapper.querySelector("[data-lang-toggle]");
    const menu = wrapper.querySelector("[data-lang-menu]");
    const icon = toggle.querySelector(".header__btn-lang-arrow");

    // Направление
    const direction = wrapper.dataset.position || "down";

    // Задаем направление открытия
    if (direction === "down") {
        menu.classList.add("mt-3.75");
        menu.classList.remove("mb-3.75");
        menu.style.top = "100%";
        menu.style.bottom = "auto";
    }

    if (direction === "up") {
        menu.classList.add("mb-3.75");
        menu.classList.remove("mt-3.75");
        menu.style.bottom = "100%";
        menu.style.top = "auto";
    }

    // Открытие / закрытие
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();

        // Закрываем все остальные
        document.querySelectorAll("[data-lang-menu]").forEach((m) => {
            if (m !== menu) m.classList.add("hidden");
        });
        document.querySelectorAll("[data-lang-toggle]").forEach((t) => {
            if (t !== toggle) t.classList.remove("active");
        });
        document.querySelectorAll(".header__btn-lang-arrow").forEach((i) => {
            if (i !== icon) i.classList.remove("rotate-180");
        });

        // Переключение этого меню
        menu.classList.toggle("hidden");
        icon.classList.toggle("rotate-180");
        toggle.classList.toggle("active");
    });

    // Закрытие по клику вне
    document.addEventListener("click", (e) => {
        if (!wrapper.contains(e.target)) {
            menu.classList.add("hidden");
            icon.classList.remove("rotate-180");
            toggle.classList.remove("active");
        }
    });
});
