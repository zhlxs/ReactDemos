import React,{Component,Fragment} from 'react'
import './style.css'
class Test1 extends Component{
    constructor(props) {
        super(props)
        this.state={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="demo">增加服务:</label><br/>{/*避免使用js关键字*/}
                    <input id="demo" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {/*<li>头部按摩</li>*/}
                    {/*<li>精油推背</li>*/}
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li key={index+item}
                                    onClick={this.delItem.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    // 增加方法
    addList(){
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }
    // 删除功能
    //箭头函数：onClick={() => this.delItem(index)}
    delItem(e,index){
        //性能障碍写法：this.state.list.splice(index,1)
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}

export default Test1