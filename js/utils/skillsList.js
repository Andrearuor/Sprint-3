 import { skills } from "../data/skills.js";

 export default function skillsList() { 
    const container = document.getElementById("Skills"); 
  if (!container) return;

  const masteredSkills = skills.filter((skill) => skill.state === "dominada");

  const skillsHTML = masteredSkills
    .map((skill) => {
      const tagsHTML = Array.isArray(skill.tags)
        ? skill.tags.map((tag) => `<span class="skill-tag">${tag}</span>`).join("")
        : "";

      return `
        
        <article class="card-skill">
          <div class="skill-header">
            <img class="skill-icon" src="${skill.icon}" alt="${skill.name}" />
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-level">${skill.level}</span>
          </div>
          <p class="skill-description">${skill.description}</p>
          <div class="skill-tags">${tagsHTML}</div>
        </article>
      `;
    })
    .join("");

  container.innerHTML = skillsHTML;
}