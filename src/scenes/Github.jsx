import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Github = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    const response = await fetch(
      "https://api.github.com/users/farzadsnj/repos"
    );
    const data = await response.json();
    setRepositories(data);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="github" className="p-10 pb-24">
      <div className="md:flex md:justify-between md:gap-8 mt-8">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-7 mt-5">
            My <span className="text-yellow">GitHub</span> PROJECTS
          </p>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border-2 border-black rounded-md p-2 mb-5 text-black w-full md:w-1/2 mx-auto"
          />
          <div className="grid grid-cols-2 gap-2">
            {filteredRepositories.length > 0 ? (
              filteredRepositories.map((repo) => (
                <div
                  key={repo.id}
                  onClick={() => window.open(repo.html_url, "_blank")}
                  className="border p-4 rounded-md cursor-pointer hover:text-black hover:bg-gray-100 transition-colors"
                >
                  <h2 className="text-sm font-semibold truncate">
                    {repo.name}
                  </h2>{" "}
                  <p className="text-xs text-gray-500">{repo.description}</p>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Github;
