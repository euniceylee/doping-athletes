var russianwaypoint = new Waypoint({
  element: document.getElementById('russia'),
  handler: function(direction) {
    show('russian')
  },
  offset: 50
})

function show(targetClass) {
  console.log(targetClass);
  [...document.querySelectorAll('#image-container img')].forEach(i => {
    if (i.className.includes(targetClass) && i.className.includes('hidden')) {
      i.className = i.className.replace(/hidden/i, 'show');
    } else if (!i.className.includes(targetClass) && i.className.includes('show')) {
      i.className = i.className.replace(/show/i, 'hidden');
    }
  })
}

function showAll() {
  [...document.querySelectorAll('#image-container img')].forEach(i => {
    if (i.className.includes('hidden'))
      i.className = i.className.replace(/hidden/i, 'show');
  })
}

var ukrainewaypoint = new Waypoint({
  element: document.getElementById('ukraine'),
  handler: function(direction) {
    show('ukraine')
  },
  offset: 50
})

var usawaypoint = new Waypoint({
  element: document.getElementById('usa'),
  handler: function(direction) {
    show('usa')
  },
  offset: 50
})


var beginningwaypoint = new Waypoint({
  element: document.getElementById('beginning'),
  handler: function(direction) {
    console.log("beginning")
    showAll()
  },
  offset: -50
})

var endwaypoint = new Waypoint({
  element: document.getElementById('text'),
  handler: function(direction) {
    show('empty')
  },
    offset: 200
})
