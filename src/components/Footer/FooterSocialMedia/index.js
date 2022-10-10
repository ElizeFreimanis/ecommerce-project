import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import * as S from "./styled";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export default function FooterSocialMedia() {
    return (
        <S.Container>
            <S.Link href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <FiFacebook />
            </S.Link>
            <S.Link href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <FiInstagram />
            </S.Link>
            <S.Link href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
                <FiTwitter />
            </S.Link>
            <S.Link href='https://www.tiktok.com/' target='_blank' rel='noreferrer'>
                <FaTiktok />
            </S.Link>
            <S.Link href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
                <FiYoutube />
            </S.Link>
        </S.Container>
    );
}
