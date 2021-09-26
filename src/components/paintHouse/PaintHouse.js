import React from 'react';

import './paintHouse.css';

export default class PaintHouse extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      arr: [
        [0,0,0,0,0,0,-1,0],
        [0,0,0,0,0,0,-1,0],
        [0,0,0,0,0,0,-1,0],
        [0,0,0,0,2,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,-1,0,-1,-1,0],
        [0,0,0,0,0,0,0,0]
      ],

      levels: [
        [
          [0, 0,0,-1,0,0,0,0],
          [0,-1,0,-1,0,0,0,0],
          [0,-1,0,0,0,2,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,-1,0,0,0],
          [0,0,-1,0,0,0,0,0],
          [-1,0,0,-1,0,0,0,0],
          [-1,-1,0,0,0,0,0,0]
        ],
        [
          [0,0,0,0,0,0,-1,-1],
          [0,0,0,0,-1,0,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,2,0,0,0],
          [0,0,-1,0,0,0,0,0],
          [0,0,0,0,0,-1,0,0],
          [0,0,-1,-1,0,0,0,0],
          [-1,0,0,0,0,0,0,0]
        ],
        [
          [-1,0,0,0,-1,0,0,0],
          [0,0,-1,0,0,0,-1,0],
          [0,0,0,0,2,0,0,0],
          [0,0,0,0,0,0,0,-1],
          [0,0,0,-1,0,-1,0,0],
          [-1,0,0,-1,0,0,-1,0],
          [0,0,0,0,0,0,-1,0],
          [0,0,0,0,0,0,0,0]
        ],
        [
          [-1,0,0,0,0,-1,0,0],
          [0,0,0,-1,0,0,0,0],
          [0,-1,0,0,-1,0,0,0],
          [0,0,0,2,0,0,0,0],
          [0,0,0,-1,0,-1,0,0],
          [0,0,0,0,0,-1,0,0],
          [0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0]
        ],
        [
          [0, 0, -1, 0, 0, 0, 0, 0],
          [-1, 0, -1, 0, -1, 0, 0, 0],
          [0, 0, 0, 0, -1, 0, 0, 0],
          [0, -1, 0, -1, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, -1, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0]
        ]
      ],
      x: 3,
      y: 4,
      posx: 3,
      posy: 4,
      dim: 8,
      gameState: 0,
      tmp: 0
    }
  }

  isValid(xi,yi){
    return 0<=xi && xi<this.state.dim && 0<=yi && yi<this.state.dim
  }

  resetGame(edit=0){
    var arr = this.state.arr

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if(arr[i][j]!=-1){
          arr[i][j]=0
        }
      }
    }

    // arr[posx][posy] = 1
    if(edit!=-1){
      edit = 0
    }

    this.setState({
      arr: arr,
      x: this.state.posx,
      y: this.state.posy,
      gameState: edit
    })
  }

  setLevel(lv){
    console.log("level: ",lv);
    var arr = this.state.levels[lv]

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if(arr[i][j]==2){
          this.setState({
            arr: arr,
            posx: i,
            posy: j,
            x: i,
            y: j,
            gameState: 0,
            tmp: this.state.tmp^1
          })
          return
        }
      }
    }
  }

  editLevel(){
    this.resetGame(-1);
  }

  toggleCell(xi,yi,lb){
    if(this.state.gameState!=-1) return;

    // console.log("Toggling ",xi,yi);
    var arr = this.state.arr
    if(lb==0){
      if(arr[xi][yi]<1){
        arr[xi][yi]+=1
        arr[xi][yi]*=-1
        // console.log("Updating ",xi,yi);
        this.setState({arr: arr, tmp: this.state.tmp^1})
      }
    }else{
      if(arr[xi][yi]==0){
        arr[this.state.posx][this.state.posy]=0
        arr[xi][yi]=2
        // console.log("Updating move ",xi,yi);
        this.setState({posx:xi, posy:yi, x:xi, y:yi, arr: arr, tmp: this.state.tmp^1})
      }
    }
  }

  checkFailure(){
    var x = this.state.x,
        y = this.state.y

    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        if(Math.abs(i+j)==1 && this.isValid(x+i,y+j)){
          if(this.state.arr[x+i][y+j]==0) return
        }
      }
    }

    var leftOver = 0

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        if(this.state.arr[i][j]==0 && i!=this.state.x && j!=this.state.y){
          leftOver+=1
        }
      }
    }

    if(leftOver>0){
      console.log("Over");
      this.setState({gameState: 2})
    }else{
      console.log("Won");
      this.setState({gameState: 1})
    }

  }

  move(dx,dy){
    if(this.state.gameState!=0) return;

    var x = this.state.x,
        y = this.state.y,
        arr = this.state.arr


    this.setState({x: x,y: y, arr: arr})

    var keepMoving = setInterval(()=>{
      if(this.isValid(x+dx,y+dy)){
          if(arr[x+dx][y+dy]==0){
            arr[x][y] = 1
            x+=dx
            y+=dy
            this.setState({x: x,y: y, arr: arr}, ()=>{
              this.checkFailure()
            })
          }else{
            clearInterval(keepMoving)
          }
        }else{
          clearInterval(keepMoving)
        }
    }, 50)

  }

  componentWillMount(){
    window.addEventListener('contextmenu', event => event.preventDefault());

    window.addEventListener('keydown', (e) => {

      if(e.keyCode>48 && e.keyCode<49+this.state.levels.length){
        this.setLevel(e.keyCode-49)
      }

      if (e.keyCode === 82) {
        // console.log('Left')
        this.resetGame()
      }

      if (e.keyCode === 69) {
        // console.log('Left')
        this.editLevel()
      }

      if (e.keyCode === 65 || e.keyCode === 37) {
        // console.log('Left')
        this.move(0,-1)
      }

      else if (e.keyCode === 87 || e.keyCode === 38) {
        // console.log('Up')
        this.move(-1,0)
      }

      else if (e.keyCode === 68 || e.keyCode === 39) {
        // console.log('Right')
        this.move(0,1)
      }

      else if (e.keyCode === 83 || e.keyCode === 40) {
        // console.log('Down')
        this.move(1,0)
      }

      else if (e.keyCode === 81) {
        console.log(this.state.arr);
      }
    });
  }

  render(){
    var x = this.state.x,
        y = this.state.y,
        dim = this.state.dim

    x = (x*82).toString()+"px"
    y = (y*82).toString()+"px"

    return(
      <div className="boxapp">
        <div className="gamescreen">
          <div className="paintContainer">
            {this.state.arr.map((row,i)=>{
              return (
                <div key={i*1247} className="rowContainer">
                  {row.map((sq,j)=>{
                    if(this.state.arr[i][j]==0){
                       return (
                         <div
                           className="sqb"
                           onMouseDown={(event)=>{
                              this.toggleCell(i,j,event.button)
                           }}
                           key={i*100+j}></div>
                       )
                    }else if (this.state.arr[i][j]==-1) {
                      return (
                        <div
                          className="sqb obst"
                          onMouseDown={(event)=>{
                             this.toggleCell(i,j,event.button)
                          }}
                          key={i*100+j}></div>
                      )
                    }else{
                      return <div className="sqb filledSq" key={i*100+j}></div>
                    }
                  })}
                </div>
              )
            })}
            <div
              className="brush"
              style={{
                position: "absolute",
                top: x,
                left: y }}></div>

            {this.state.gameState==1?
              <div
                onClick={this.resetGame.bind(this)}
                className="banner">Level Complete</div>:null}
            {this.state.gameState==2?
              <div
                onClick={this.resetGame.bind(this)}
                className="banner">Game Over</div>:null}
          </div>
          <div className="oth-options">
            <div className="playoption">
              <div className={this.state.gameState==-1?"svgcontainer selected":"svgcontainer"} onClick={this.editLevel.bind(this)}>
                <svg className="svgicon" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-15 -15 484.00019 484" enableBackground="new -15 -15 484.00019 484">
                  <path d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0"/>
                </svg>
              </div>
              <span>
                Edit
              </span>
            </div>
            <div className="playoption">
              <div className="svgcontainer" onClick={this.resetGame.bind(this)}>
                <svg className="svgicon" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 438.536 438.536" enableBackground="new 0 0 438.536 438.536">
                  <g>
                    <path d="M421.125,134.191c-11.608-27.03-27.217-50.347-46.819-69.949C354.7,44.639,331.384,29.033,304.353,17.42   C277.325,5.807,248.969,0.005,219.275,0.005c-27.978,0-55.052,5.277-81.227,15.843C111.879,26.412,88.61,41.305,68.243,60.531   l-37.12-36.835c-5.711-5.901-12.275-7.232-19.701-3.999C3.807,22.937,0,28.554,0,36.547v127.907c0,4.948,1.809,9.231,5.426,12.847   c3.619,3.617,7.902,5.426,12.85,5.426h127.907c7.996,0,13.61-3.807,16.846-11.421c3.234-7.423,1.903-13.988-3.999-19.701   l-39.115-39.398c13.328-12.563,28.553-22.222,45.683-28.98c17.131-6.757,35.021-10.138,53.675-10.138   c19.793,0,38.687,3.858,56.674,11.563c17.99,7.71,33.544,18.131,46.679,31.265c13.134,13.131,23.555,28.69,31.265,46.679   c7.703,17.987,11.56,36.875,11.56,56.674c0,19.798-3.856,38.686-11.56,56.672c-7.71,17.987-18.131,33.544-31.265,46.679   c-13.135,13.134-28.695,23.558-46.679,31.265c-17.987,7.707-36.881,11.561-56.674,11.561c-22.651,0-44.064-4.949-64.241-14.843   c-20.174-9.894-37.209-23.883-51.104-41.973c-1.331-1.902-3.521-3.046-6.567-3.429c-2.856,0-5.236,0.855-7.139,2.566   l-39.114,39.402c-1.521,1.53-2.33,3.478-2.426,5.853c-0.094,2.385,0.527,4.524,1.858,6.427   c20.749,25.125,45.871,44.587,75.373,58.382c29.502,13.798,60.625,20.701,93.362,20.701c29.694,0,58.05-5.808,85.078-17.416   c27.031-11.607,50.34-27.22,69.949-46.821c19.605-19.609,35.211-42.921,46.822-69.949s17.411-55.392,17.411-85.08   C438.536,189.569,432.732,161.22,421.125,134.191z"/>
                  </g>
                </svg>
              </div>
              <span>
                Restart
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}