import React from 'react'
import axios from 'axios'

class Material extends React.Component {
  constructor(props) {
    super()
    this.state = {
      materialInfo: [],
      materialId: null,
    }
  }

  async componentDidMount() {
    await this.handleGetMaterialInfo()
  }

  async componentDidUpdate() {
    if (this.state.materialId !== this.props.match.params.id) {
      await this.handleGetMaterialInfo()
    }
  }

  async handleGetMaterialInfo() {
    const materialId = this.props.match.params.id
    try {
      let getMaterialInfo = await axios.get(`/materials/${materialId}`)
      let getMaterialInfoData = getMaterialInfo.data.payload
      this.setState({
        materialInfo: [getMaterialInfoData],
        materialId: materialId
      })
    } catch (err) {
      console.log('ERROR', err)
    }
  }


  render() {
    const { materialInfo } = this.state
    return (
      <div className='container-stage'>
        <h1>Material</h1>
        <div className='materialCard'>{
          materialInfo.map((info, index) => {
            return (
              <div key={index}>
                <p className='materialName'>{info.name}</p>
                <img className='materialPic' src={info.photo_url} alt="hi-res descriptive look"></img>
                <p className='materialDescription'>{info.description}</p>
                <br/>
                <div className='benefits'>
                  <p className='benefitsTitle'>Benefits</p>
                  <br/>
                  <div className='socialBenefit'>
                    <p className='benefitsBody'>{info.socialbenefit}</p>
                  </div>
                  <br/>
                  <div className='environmentBenefit'>
                    <p className='benefitsBody'>{info.environmentbenefit}</p>
                  </div>
                  <br/>
                  <div className='costBenefit'>
                    <p className='benefitsBody'>{info.costbenefit}</p>
                  </div>
                </div>
              </div>
            )
          })
        }

        </div>
      </div>
    )
  }
}

export default Material
