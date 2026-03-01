const projects = [
    {
        id: 1,
        title: "ERM System",
        description: "A backend-driven Enterprise Resource Management (ERM) system that centralizes business operations through structured APIs, modular domain logic, and a scalable, database-first architecture. Made with Laravel and MySql",
        image: "/projects/erm_project_picture.png",
        tags: ["Laravel", "MySql", "Docker", "CI/CD"],
        url: "#",
        gitHubUrl: "https://github.com/ilijaristov67/ERM",
    },
    {
        id: 2,
        title: "Pig Game",
        description: "Pig Game is a simple two-player dice game where each turn players roll a die and accumulate points, choosing to either hold and bank their round score or risk rolling again — first to reach a target score wins.",
        image: "/projects/pig_game.png",
        tags: ["JavaScript", "Html/Css"],
        url: "https://pig-game-v2.netlify.app/",
        gitHubUrl: "https://github.com/ilijaristov67/pig_game",
    },
    {
        id: 3,
        title: "Guess the number",
        description: "A simple interactive number-guessing game with progressive hints until you find the secret value.",
        image: "/projects/guess_my_number_game.png",
        tags: ["JavaScript", "Html/Css"],
        url: "https://guess-my-number-ilija.netlify.app/",
        gitHubUrl: "https://github.com/ilijaristov67/guess_my_number",
    }
];

export const ProjectsSection = () => {
  return <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Featured{" "}
              <span className="text-primary">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project has been carefully crafted with attention to detail, performance and keeping the user experience in mind!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, key) => (
                  <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foregroud">
                                    {tag}
                                </span>
                            ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-1">
                          {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                          {project.description}
                      </p>
                  </div>
              ))}
          </div>
      </div>
  </section>;
};
