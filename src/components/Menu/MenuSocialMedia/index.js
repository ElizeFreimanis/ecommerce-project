import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import * as S from "./styled";

export default function MenuSocialMedia() {
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
        </S.Container>
    );
}
