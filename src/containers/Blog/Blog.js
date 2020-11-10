import React, {Component, createRef} from 'react';
import FullPost from '../../components/FullPost/FullPost';
import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Blog.css';
import Modal from '../../components/Modal/Modal';
gsap.registerPlugin(ScrollTrigger); 


class Blog extends Component{
    constructor(props) {
        super(props);
        this.state={
            articles:[
                {
                  id:1,
                  title: "Spring",
                  excerpt:
                    "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
                  fullPost: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                  image: "spring"
                },
                {
                  id:2,
                  title: "Summer",
                  excerpt:
                    "Dignissimos placeat cupiditate perferendis eaque praesentium similique officia dolore?",
                  fullPost: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                  image:"summer"
                },
                {
                  id:3,
                  title: "Winter",
                  excerpt:
                    "In ullam et nulla repudiandae praesentium, laboriosam quas tempore fuga asperiores eveniet amet.",
                  fullPost: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, ea.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
                  image:"winter"
                }
              ],
              showArticle: false,
              selectedPostId:null
        };
        this.revealRefs = createRef([]);
        this.revealRefs.current = [];
        this.revealImgRef = createRef();
        this.imgRef = createRef();
        this.revealTextRef = createRef();
    
    
      }
    
      componentDidMount(){
       //Init Controller
        this.revealRefs.current.forEach((slide,index) => {
          const revealIm = slide.querySelector('.reveal-img');
          const imgI = slide.querySelector('img');
          const revealText = slide.querySelector(".reveal-text");
          
          const tl = new TimelineMax({
            defaults: { duration: 1, ease: "power2.inOut" },
            scrollTrigger:{
              id: `section-${index+1}`,
              trigger: slide,
              //markers:true,
              start: 'center bottom',
              toggleActions: 'restart pause restart pause'
            }
          });
          
          tl.fromTo(revealIm, { x:'0%'}, { x:'100%'});
          tl.fromTo(imgI, { scale: 2 }, {scale: 1}, "-=1");
          tl.fromTo(revealText, { x: "0%" }, { x: "100%"}, "-=0.75");
          }); 
      }

   
      slideRef = (el) => {
        if (el && !this.revealRefs.current.includes(el)) {
          this.revealRefs.current.push(el);
        } 
      }

    //pass on the Id and open the modal
      showFullPost = (id) => {
        this.setState({
          selectedPostId:id,
          showArticle:true
        })
      }
  //method to close the Modal
  closeModal = () =>{
      this.setState({showArticle:false})
  }
 
    render(){
    
        return(
        <div>
                 {
        this.state.articles.map((item) => (
            <section key={item.id} className="slide" ref={this.slideRef}>
            <div className="hero-img">
                <img alt={item.image} src={`./assets/${item.image}.png`} ref={this.imgRef}/>
                <div className="reveal-img" ref={this.revealImgRef}></div>
            </div>
            <div className="hero-desc">
              <div className="title">
                <h2>
               <b className="fashion-span">{item.title}</b> Collection
                </h2>
                <div className="title-swipe t-swipe" ref={this.titleSwipe}></div>
              </div>
              <p>
                {item.excerpt}
              </p>
              <button onClick={() => this.showFullPost(item.id)} className="explore mountain-exp">Explore</button>
              <div className="reveal-text" ref={this.revealTextRef}></div>
            </div>
            
            <Modal show={this.state.showArticle} modalClosed={this.closeModal}>
            <FullPost id={this.state.selectedPostId} articleId={item.id} title={item.title} image={item.image} content={item.fullPost}></FullPost>
            </Modal>
            
            
            
          </section>
        
            ))}
            
           
            </div>
       
        )
       
    }
}
export default Blog;