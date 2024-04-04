// Create PowerpuffGirl objects

function PowerpuffGirl (name, color, superpower) {
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isLeader = false

    this.displayinfo = function () {
        console.log(`Powerpuff Girl Information:

        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `)
    }

    this.becomeLeader = function () {
        this.isLeader = true
        console.log(`${this.name} has become the leader of the Powerpuff Girls !`)
    }

}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength')
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight Strength')

blossom.displayinfo()
buttercup.displayinfo()
bubbles.displayinfo()

blossom.becomeLeader()

blossom.displayinfo()
buttercup.displayinfo()
bubbles.displayinfo()