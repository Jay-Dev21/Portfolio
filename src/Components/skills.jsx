import './skills.css'
function Skills() {
    return (
        <div className='ski'>
            <h2>My Skills</h2>
            <div className='ski-content'>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/html.png" alt="" className='ski-img' />
                        <h3>HTML</h3>
                        <h3>80%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii'></div>
                    </div>
                </div>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/css.png" alt="" className='ski-img' />
                        <h3>CSS</h3>
                        <h3>75%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii' style={{width: '75%'}}></div>
                    </div>
                </div>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/js.png" alt="" className='ski-img' />
                        <h3>JavaScript</h3>
                        <h3>70%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii' style={{width: '70%'}}></div>
                    </div>
                </div>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/react.png" alt="" className='ski-img' />
                        <h3>React</h3>
                        <h3>65%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii' style={{width: '65%'}}></div>
                    </div>
                </div>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/node.png" alt="" className='ski-img' />
                        <h3>node.js</h3>
                        <h3>10%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii' style={{width: '10%'}}></div>
                    </div>
                </div>
                <div className='ski-box'>
                    <div className='ski-text'>
                        <img src="/mongo.png" alt="" className='ski-img' />
                        <h3>Mongo DB</h3>
                        <h3>5%</h3>
                    </div>
                    <div className='ski-empty'>
                        <div className='ski-emptyii' style={{width: '5%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;