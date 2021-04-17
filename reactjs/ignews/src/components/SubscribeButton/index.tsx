import { useSession, signIn } from 'next-auth/client';
import styles from './styles.module.scss';

interface SubscribeButtonProps {
    priceId: string;
}

//locais abaixo onde usuario não acessa
//getServerSideProps (SSR)
//getStaticProps (SsG)
//api routes //quando acontece depois da pagina ser exibida

export function SubscribeButton({priceId}: SubscribeButtonProps){
    const [session] = useSession();

    function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }

        // criação da checkout session
    }

    return (
        <button 
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}