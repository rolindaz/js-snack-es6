/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creare un array di oggetti di squadre di calcio

const footballTeams = [
    // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    {
        teamName: 'Real Madrid',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Bayern Monaco',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Barcellona',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Manchester United',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Paris Saint-Germain',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Liverpool',
        points: 0,
        fouls: 0
    },
    {
        teamName: 'Chelsea',
        points: 0,
        fouls: 0
    }
];

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

for (let i = 0; i < footballTeams.length; i++) {
    let thisTeam = footballTeams[i];
   
    thisTeam.points = Math.ceil(Math.random() * 100);
    thisTeam.fouls = Math.ceil(Math.random() * 30);
    //console.log(teamPoints, teamFouls);
}


console.table(footballTeams);


// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti

const newStats = [];

for (let i = 0; i < footballTeams.length; i++) {
    let thisTeam = footballTeams[i];
    const newStatTeam = {
        teamName: thisTeam.teamName,
        fouls: thisTeam.fouls
    };
    newStats.push(newStatTeam);
};

console.table(newStats);