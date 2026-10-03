const {
  useState
} = React;

/* ===== EDIT YOUR CONTENT HERE ===== */
const NAME = "Deepak Mandal";
const HEADLINE = "I build web apps from database to browser.";
const INTRO = `Hi, I'm ${NAME}, a full-stack developer who turns ideas into fast, accessible and well-structured products.`;
const ABOUT = ["I'm a developer who enjoys the whole journey of a product: designing the interface, building the API and deploying it.", "I care about clean code, clear communication and learning fast. I'm looking for an internship where I can contribute to real, larger-scale work."];
const LINKS = ["home", "about", "skills", "projects", "contact"];
const SKILLS = {
  Frontend: ["HTML", "CSS", "JavaScript", "React"],
  Backend: ["Node.js", "Express", "REST APIs"],
  "Data & Tools": ["MongoDB", "SQL", "Git", "GitHub"]
};
const PROJECTS = [{
  title: "Task Manager",
  text: "Create, edit and complete tasks with filters.",
  tags: ["React", "Node.js"],
  link: "#"
}, {
  title: "Weather App",
  text: "Search any city and see a live forecast.",
  tags: ["JavaScript", "API"],
  link: "#"
}, {
  title: "Blog Platform",
  text: "Full-stack blog with login and comments.",
  tags: ["Express", "MongoDB"],
  link: "#"
}];

/* ===== COMPONENTS ===== */
function Header() {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    className: "wrap bar"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "#home"
  }, NAME), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, open ? "Close" : "Menu"), /*#__PURE__*/React.createElement("nav", {
    className: open ? "open" : "",
    "aria-label": "Main"
  }, /*#__PURE__*/React.createElement("ul", null, LINKS.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#" + l,
    onClick: () => setOpen(false)
  }, l[0].toUpperCase() + l.slice(1))))))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h1", null, HEADLINE), /*#__PURE__*/React.createElement("p", null, INTRO), /*#__PURE__*/React.createElement("a", {
    className: "btn",
    href: "#projects"
  }, "See my projects"), /*#__PURE__*/React.createElement("a", {
    className: "btn alt",
    href: "#contact"
  }, "Contact me")));
}
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    "aria-hidden": "true"
  }, NAME[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "About me"), ABOUT.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, t)))));
}
function Skills() {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", null, "Skills and tools"), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, Object.entries(SKILLS).map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    className: "card",
    key: group
  }, /*#__PURE__*/React.createElement("h3", null, group), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, items.map(s => /*#__PURE__*/React.createElement("span", {
    key: s
  }, s))))))));
}
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", null, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement("article", {
    className: "card",
    key: p.title
  }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.text), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))), /*#__PURE__*/React.createElement("a", {
    href: p.link
  }, "View project"))))));
}
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const validate = f => {
    const e = {};
    if (f.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email, like name@example.com.";
    if (f.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
    return e;
  };
  const change = ev => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
    setSent(false);
  };
  const submit = ev => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Later: send `form` to your backend or a service like Formspree.
      setSent(true);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  };
  const field = (name, label, Tag = "input", extra = {}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/React.createElement(Tag, {
    id: name,
    name: name,
    value: form[name],
    onChange: change,
    className: errors[name] ? "bad" : "",
    "aria-invalid": !!errors[name],
    ...extra
  }), errors[name] && /*#__PURE__*/React.createElement("p", {
    className: "err",
    role: "alert"
  }, errors[name]));
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("h2", null, "Contact"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, sent && /*#__PURE__*/React.createElement("div", {
    className: "ok",
    role: "status"
  }, "Message sent. Thank you, I'll reply soon."), field("name", "Name"), field("email", "Email", "input", {
    type: "email"
  }), field("message", "Message", "textarea", {
    rows: 5
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    type: "submit"
  }, "Send message"))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement("footer", null, "© ", new Date().getFullYear(), " ", NAME));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
