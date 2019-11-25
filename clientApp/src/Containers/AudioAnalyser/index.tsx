import React, { Component } from 'react'

import AudioVisualiser from '../AudioVisualiser'


interface IProps {
  url: string
}

interface IState {
  audioData?: Uint8Array
}

class Audio extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { audioData: undefined }
  }

  private audioRef = React.createRef<HTMLAudioElement>()

  private audioCtx?: AudioContext
  private src?: MediaElementAudioSourceNode
  private analyser?: AnalyserNode
  private dataArray? : Uint8Array
  private animationId?: number

  componentDidMount() {
    const audio = this.audioRef.current
    if (!audio) return

    this.audioCtx = new AudioContext()
    this.src = this.audioCtx.createMediaElementSource(audio)
    this.analyser = this.audioCtx.createAnalyser()

    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)

    this.analyser.connect(this.audioCtx.destination)
    this.src.connect(this.analyser)

    this.animationId = requestAnimationFrame(this.tick)
  }

  componentWillUnmount() {
    if(this.animationId) cancelAnimationFrame(this.animationId)
    if(this.analyser) this.analyser.disconnect()
    if(this.src) this.src.disconnect()
  }

  tick = () => {
    if(!this.analyser || !this.dataArray) return
    this.analyser.getByteTimeDomainData(this.dataArray)
    this.setState({ audioData: this.dataArray })
    this.animationId = requestAnimationFrame(this.tick)
  }

  render() {
    const { url } = this.props
    const { audioData } = this.state
    return (
      <div>
        <AudioVisualiser audioData={audioData}/>
        <audio
          crossOrigin="anonymous"
          ref={this.audioRef}
          controls
          src={url}
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 0,
          }}
        />
      </div>
    )
  }
}

export default Audio