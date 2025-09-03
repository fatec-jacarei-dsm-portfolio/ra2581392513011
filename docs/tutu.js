class Tutu {
    position = { top: '0', bottom: '0', left: '0', right: '0' }

    tutu = document.getElementById('tutu')

    changePosition(position) {
        const { top, bottom, left, rigth } = position
        this.tutu.style.top = top;
        this.tutu.style.left = left;
        this.tutu.style.right = rigth;
        this.tutu.style.bottom = bottom;
    }
    positionReset() {
        this.position = { top: '0', bottom: '0', left: '0', right: '0' }

    }
    toUpperLeft() {
        this.position.left = '50px'
        this.position.top = '100px'
        this.changePosition(this.position)
        this.positionReset();
        console.log(this.position)

    }
    toUpperRigth() {
        this.position.right = '50px'
        this.position.bottom = '100px'
        this.changePosition(this.position)
        this.positionReset();
        console.log(this.position)
    }

}

const tutu = new Tutu();
