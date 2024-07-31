import Style from './Banner.module.css';

export const Banner = () => {
    return(
        <div className={Style['banner']}>
            <div className={Style['banner-container']}>
                <p className={Style['banner-button-active']}>Главная</p>
                <p className={Style['banner-losung']}>Твой помощник
                Круглосуточно</p>
                <p className={Style['banner-text']}>Встречайте электронный дневник - ваш 
                    надежный спутник в организации повседневных дел и 
                    достижении целей! Наш инновационный дневник поможет 
                    вам удобно вести записи о своих мыслях, планах и 
                    достижениях, всегда под рукой и доступен в любое время 
                    через мобильное приложение или веб-версию.</p>
                    <div className={Style['banner-block']}>
                        <ul className={Style['banner-plus']}>
                            <li>Поддержка</li>
                            <li>Доступность</li>
                            <li>Лёгкость</li>
                            <li>Стабильность</li>
                            <li>Удобность</li>
                        </ul>
                    </div>
                    <a className={Style['registration']}>Регистрация</a>
                    <a className={Style['sign-in']}>Войти</a>
                    <img className={Style['banner-image']} src="banner.png" alt="" />

            </div>
        </div>
    )
}