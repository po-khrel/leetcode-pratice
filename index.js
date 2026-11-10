class stack {
    constructor() {
        this.arr = new Array (5)
        this.top = -1
    }

    push(x) {
        if(this.top === 4) {
            console.log('Stack Overflow')
            return
        }
        this.arr[++this.top] = x
    }

    pop() {
        if(this.top === -1) {
            console.log('Stack Underflow')
            return
        }
        this.top--
    }

    
        display() {
            for(let i = this.top; i >= 0; i--) {
                process.stdout.write(this.arr[i] + '')
            }
            console.log()
        }

   
}

 const s = new stack()

    s.push(10)
    s.push(20)
    s.push(30)

    process.stdout.write('Stack elements: ')
    s.display()

    s.pop()

    process.stdout.write('After pop: ')
    s.display()

