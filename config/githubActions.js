const settings = {
  repo: "fischer-frontend",
  user: "Christian99-dev",
  event_types: ["strapi-staging", "strapi-production"],
  token: process.env.GIT_PAT,
};

module.exports = {
  githubActionCall() {
    if (process.env.NODE_ENV === "development") {
      console.log(
        "Jetzt würde GithubActionCall() ausgeführt werden, wenn wir in Production wären"
      );
      return;
    }

    settings.event_types.forEach(async (eventType) => {
        const requestData = JSON.stringify({ event_type: eventType });
    
        try {
            const response = await fetch(`https://api.github.com/repos/${settings.user}/${settings.repo}/dispatches`, {
                method: 'POST',
                body: requestData,
                headers: {
                    'Accept': 'application/vnd.github+json',
                    'Authorization': `token ${settings.token}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 204) {
                console.log(`Event "${eventType}" dispatched successfully.`);
            } else {
                const errorData = await response.text();
                console.error(`Failed to dispatch event "${eventType}". Status code: ${response.status}`);
                console.error(errorData);
            }
        } catch (error) {
            console.error(`Error dispatching event "${eventType}": ${error.message}`);
        }
    });
  },
  register: {
    afterCreate() {
      strapi.config.githubActions.githubActionCall();
    },
    afterUpdate() {
      strapi.config.githubActions.githubActionCall();
    },
    afterDelete() {
      strapi.config.githubActions.githubActionCall();
    },
  },
};
