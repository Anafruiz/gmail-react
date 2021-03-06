const getDataFromApi = (emails, textFilter, showInbox) => {
  return fetch("//beta.adalab.es/ejercicios-extra/api/emails/v01.json")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default getDataFromApi;

//En caso de que la url del fetch no funciones, usar este JSON:
// {
//     "results": [
//       {
//         "id": "asdf1",
//         "fromName": "Front Fest",
//         "fromEmail": "info@frontfest.org",
//         "date": "15:27",
//         "subject": "Entradas ya a la venta",
//         "deleted": false,
//         "read": true,
//         "body": "FrontFest es un evento anual y sin ánimo de lucro. Está organizado y gestionado por un equipo de voluntarios y voluntarias que pertenecen a la comunidad de desarrollo frontend.. Celebrado por primera vez en 2017, pretende ser un punto de encuentro a nivel nacional, principalmente en castellano, para todas aquellas personas interesadas en las tecnologías de frontend, donde compartir experiencias y aprender acerca de las nuevas tendencias en el sector. Y por supuesto, acabar divirtiéndose en buena compañía."
//       },
//       {
//         "id": "fas2",
//         "fromName": "GitHub",
//         "fromEmail": "noreply@github.com",
//         "date": "13:51",
//         "subject": "Adalab/project-promo-i Local store #23",
//         "deleted": false,
//         "read": false,
//         "body": "You can view, comment on, or merge this pull request online at:. https://github.com/Adalab/project-promo-h/pull/23. Commit Summary. Local storage wip. Accept incoming changes. Merge after dev with reset. File Changes. M src/components/App.js (22). M src/components/Form.js (2). A src/localStorage/localstorage.js (7)"
//       },
//       {
//         "id": "hfgh3",
//         "fromName": "Node Weekly",
//         "fromEmail": "node@cooperpress.com",
//         "date": "20:41",
//         "subject": "Node news",
//         "deleted": true,
//         "read": true,
//         "body": "How We 30x-ed Our Node Parallelism — An interesting write up of how one team safely increased the parallelism of their Node-based service. You might find things to argue with here, but this is real world stuff.. Node v13.6.0 (Current) Released — The usual tweaks and minor improvements. perf_hooks is no longer experimental, the REPL gains zsh-style reverse searching, and there are two new assert methods for when using regular expressions (assert.match and assert.doesNotMatch)."
//       }
//     ]
//   }
