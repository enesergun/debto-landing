'use client';

import BenefitSection from "./BenefitSection"
import { benefits as rawBenefits } from "@/data/benefits"
import { useTranslation } from 'react-i18next'

const Benefits: React.FC = () => {
    const { t } = useTranslation();
    const benefits = rawBenefits.map((item, index) => ({
        ...item,
        title: t(`benefits.${index}.title`),
        description: t(`benefits.${index}.description`),
        bullets: item.bullets.map((bullet, bi) => ({
            ...bullet,
            title: t(`benefits.${index}.bullets.${bi}.title`),
            description: t(`benefits.${index}.bullets.${bi}.description`),
        })),
    }));

    return (
        <div id="features">
            <h2 className="sr-only">{t('menu.features')}</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits