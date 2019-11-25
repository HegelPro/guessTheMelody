import React, {Component} from 'react'

interface IProps {
  audioData?: Uint8Array
}

interface IState {}

class AudioVisualiser extends Component<IProps, IState>{
  private canvasRef = React.createRef<HTMLCanvasElement>()

  componentDidUpdate() {
    this.renderFrame()
  }

  private renderFrame = () => {
    const { audioData } = this.props
    if(!audioData) return
    const canvas = this.canvasRef.current
    if(!canvas) return
    const canvasCtx = canvas.getContext('2d')
    if(!canvasCtx)  return

    // canvas variables
    const WIDTH = canvas.width
    const HEIGHT = canvas.height

    let barWidth = WIDTH / audioData.length
    let barHeight
    let x = 0
  
    canvasCtx.fillStyle = "#000"
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
    
    for (let i = 0; i < audioData.length; i++) {
      barHeight = audioData[i] / audioData.length

      canvasCtx.fillStyle = "#fff"
      canvasCtx.fillRect(x, HEIGHT - HEIGHT * barHeight, barWidth, HEIGHT * barHeight)
      x += barWidth
    }
  }

  render() {
    return (
      <canvas
        width='400'
        height='100'
        ref={this.canvasRef}
        style={{
          left: 0,
          top: 0,
          width: '100%',
        }}
      />
    )
  }
}

export default AudioVisualiser