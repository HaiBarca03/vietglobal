import React, { useTransition } from "react";
import { useState } from "react";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import { useTranslation } from "react-i18next";

const partners = [
  {
    name: "CMA CGM",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/CMA-CGM_Shipping_drdn67.png",
  },
  {
    name: "EVERGREEN",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/Evergreen_Logo_leeecu.png",
  },
  {
    name: "APL",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_apl_c8ilur.png",
  },
  {
    name: "HAMBURG SÜD",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_hamburg-sud_ngs7b4.png",
  },
  {
    name: "HAPAG-LLOYD",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_Hapag-Lloyd_iakcdw.png",
  },
  {
    name: "HEUNG-A",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_heung-a_ruw1ff.png",
  },
  {
    name: "HMM",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_hmm_eo5e1e.png",
  },
  {
    name: "SEALAND",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850081/logo-sealand_ydjl0u.png",
  },
  {
    name: "MSC",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_MSC_txg3gu.png",
  },
  {
    name: "TS LINES",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_TS_gokjfv.png",
  },
  {
    name: "YANG MING",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_yang_ming.png",
  },
  {
    name: "ZIM",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_ZIM_ojvcv3.png",
  },
  {
    name: "CNC",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-cnc_snfad9.png",
  },
  {
    name: "COSCO SHIPPING",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-cosco_s0vgqq.png",
  },
  {
    name: "PIL",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-pil_ke6ofj.png",
  },
  {
    name: "RCL",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850080/logo-rcl_nim1cn.png",
  },
  {
    name: "MAERSK LINE",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850088/maersk-line-vector-logo_gsagni.png",
  },
  {
    name: "OOCL",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850100/oocl-logo_tmaylg.png",
  },
  {
    name: "WAN HAI LINES",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850100/Wan_Hai_logo_tglxvu.png",
  },
  {
    name: "SITC",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850081/logo-sealand_ydjl0u.png",
  },
  {
    name: "KMTC",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-KMTC_nfhqpv.png",
  },
  {
    name: "SKR",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850082/logo-SKR_qpdsv6.png",
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .partners-section {
    background: #f8f9fb;
    min-height: 100vh;
    font-family: 'Barlow', sans-serif;
  }

  .section-header {
    text-align: center;
    margin-bottom: 56px;
  }

  .section-eyebrow {
    display: inline-block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #1b6fd8;
    background: rgba(27, 111, 216, 0.08);
    border: 1px solid rgba(27, 111, 216, 0.18);
    padding: 5px 14px;
    border-radius: 2px;
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 38px;
    font-weight: 700;
    color: #0d1b2e;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  .section-title span {
    color: #1b6fd8;
  }

  .section-subtitle {
    font-size: 15px;
    color: #6b7a8d;
    font-weight: 400;
    max-width: 440px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .divider {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #1b6fd8, #4a9eff);
    margin: 20px auto 0;
    border-radius: 2px;
  }

  .partners-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .partner-card {
    background: #ffffff;
    border: 1px solid #e8ecf1;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 16px;
    height: 88px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.22s ease;
  }

  .partner-card::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #1b6fd8, #4a9eff);
    transform: scaleX(0);
    transition: transform 0.22s ease;
    transform-origin: left;
  }

  .partner-card:hover {
    border-color: #c2d4ec;
    box-shadow: 0 4px 20px rgba(27, 111, 216, 0.1);
    transform: translateY(-2px);
  }

  .partner-card:hover::before {
    transform: scaleX(1);
  }

  .partner-card img {
    max-width: 100%;
    max-height: 44px;
    object-fit: contain;
    filter: grayscale(20%);
    transition: filter 0.22s ease;
  }

  .partner-card:hover img {
    filter: grayscale(0%);
  }

  .stats-row {
    display: flex;
    justify-content: center;
    gap: 56px;
    margin-top: 48px;
    padding-top: 40px;
    border-top: 1px solid #dde3ec;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #0d1b2e;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .stat-number span {
    color: #1b6fd8;
  }

  .stat-label {
    font-size: 12px;
    color: #8a96a6;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
    margin-top: 6px;
  }

  @media (max-width: 960px) {
    .partners-grid { grid-template-columns: repeat(4, 1fr); }
  }

  @media (max-width: 640px) {
    .partners-grid { grid-template-columns: repeat(3, 1fr); }
    .partners-section { padding: 40px 20px; }
    .section-title { font-size: 28px; }
    .stats-row { gap: 28px; flex-wrap: wrap; }
  }
`;

const PartnersPage = () => {
  const [hovered, setHovered] = useState(null);
   const {t} = useTranslation()
  const current = { title: t("partners") };

  const breadcrumbs = [
    { label: "VietGlobal", href: "/" },
    { label: t("footer.about.partners"), href: "#" },
  ];

  return (
    <>
      <style>{styles}</style>
      <section className="partners-section">
        <PageHeader title={current.title} />

        <PageBreadcrumb items={breadcrumbs} />

        <div className="partners-grid">
          {partners.map((p, i) => (
            <div
              key={i}
              className="partner-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              title={p.name}
            >
              <img
                src={p.url}
                alt={p.name}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `<span style="font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;color:#8a96a6;letter-spacing:0.05em;">${p.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">
              22<span>+</span>
            </div>
            <div className="stat-label">{t("partnersPage.Shippingcompany")}"</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              150<span>+</span>
            </div>
            <div className="stat-label">{t("partnersPage.Cargoroute")}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              80<span>+</span>
            </div>
            <div className="stat-label">{t("partnersPage.Seaport")}</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              15<span>+</span>
            </div>
            <div className="stat-label">{t("partnersPage.Yearsofexperience")}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
