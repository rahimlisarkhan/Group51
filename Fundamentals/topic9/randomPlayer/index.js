$(document).ready(() => {
  let players = [
    {
      id: "001",
      name: "Superman",
      power: 20,
    },
    {
      id: "002",
      name: "Batman",
      power: 20,
    },
    {
      id: "003",
      name: "Ironman",
      power: 20,
    },
    {
      id: "004",
      name: "Spiderman",
      power: 20,
    },
    {
      id: "005",
      name: "Dragonman",
      power: 20,
    },
  ];

 let player1 = null
 let player2 = null


  function startGame(arr){
    $(".playerlist").html(arr.map(player =>`
      <button class="selectPlayer" id="${player.id}">${player.name}</button>
    
    `))
  }


  startGame(players)


  $(document).on("click",".selectPlayer",function(){
    let playerID = $(this).attr("id")

    player1 = players.find(item => item.id === playerID )
    filterPlayers = players.filter(item => item.id !==playerID)

    console.log(filterPlayers);
    renderPlayer1(player1)
    startGame(filterPlayers)
  })

  

  function renderPlayer1(obj){

    let { name,power} = obj
    $(".playArea").html(`
    <div>
      <strong>
      ${name}
      </strong>
      <strong>
      ${power}
      </strong>
    </div>
    
    `)

  }

});
