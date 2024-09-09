import CardSkill from '../CardSkill';
import './WorkWith.css'

const WorkWith = () => {
    return (
        <section>
            <div className='work-with'>
                <h3>Work With</h3>
                <div className='cards'>
                    <CardSkill img='./imagens/figma.png' alt='logo do figma'></CardSkill>
                    <CardSkill img='./imagens/photoshop.png' alt='logo do adobe photoshop'></CardSkill>
                    <CardSkill img='./imagens/canva.png' alt='logo do canva'></CardSkill>
                    <CardSkill img='./imagens/illustrator.png' alt='logo do adobe illustrator'></CardSkill>
                    <CardSkill img='./imagens/capcut.png' alt='logo do capcut'></CardSkill>

                </div>
            </div>
        </section>
    );
  }
  
  export default WorkWith;