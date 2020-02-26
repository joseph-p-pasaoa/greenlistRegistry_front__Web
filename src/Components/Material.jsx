import React from 'react'
import axios from 'axios'

class Material extends React.Component {
  constructor(){
    super()
    this.state={
      materialInfo: []
    }
   
  }

  async componentDidMount() {
    await this.handleGetMaterialInfo()
 
    
  }


async handleGetMaterialInfo(){
  const {materialInfo} = this.state
  let materialId = parseInt(this.props.match.params.id)

  try {
    let getMaterialInfo = await axios.get(`/materials/${materialId}`)
    let getMaterialInfoData = getMaterialInfo.data.payload
    this.setState({
      materialInfo: [...materialInfo, getMaterialInfoData]
    })
  } catch (err) {
    console.log('ERROR', err)
  }
}




  render() {
    const {materialInfo} = this.state
    console.log("this.props", this.props)
    return (
      <div className='container'>
        <h1>Material</h1>
        <div className='materialCard'>{
          materialInfo.map(info =>{
            return(
              <div>
                 <p className='materialName'>{info.name}</p>
          <img className='materialPic' src={info.photo_url}></img>
          <p className='materialDescription'>{info.description}</p>
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
