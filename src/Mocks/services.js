import React from "react";
import {
  FaHandshake,
  FaHeadset,
  FaProjectDiagram,
  FaRegClock,
  FaSave,
  FaShieldAlt,
  FaTools,
  FaTv,
  FaUserCog,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Assistência Técnica",
    description: "Assistência Técnica de forma remota ou de forma presencial.",
    icon: <FaHandshake size={44} />,
  },
  {
    id: 2,
    name: "Segurança",
    description:
      "Proteção empresarial através de antivírus gerenciável e ferramentas profissionais.",
    icon: <FaShieldAlt size={44} />,
  },
  {
    id: 3,
    name: "Backup",
    description: "Backup de dados em nuvem com criptografia de ponta a ponta.",
    icon: <FaSave size={44} />,
  },
  {
    id: 4,
    name: " Consultoria e Gestão em TI",
    description:
      "Consultoria e Gestão em TI para empresas de pequeno e médio porte.",
    icon: <FaTv size={44} />,
  },
  {
    id: 5,
    name: "Plantão Técnico",
    description:
      "Suporte Técnico 24 x 7 x 365. 24 Horas por dia, 7 Dias por semana, durante 365 dias do ano.",
    icon: <FaRegClock size={44} />,
  },
  {
    id: 6,
    name: "Project Monitoring",
    description: "Monitoramento e gerenciamento de projetos.",
    icon: <FaProjectDiagram size={44} />,
  },
  {
    id: 7,
    name: "Fornecedores e Prestadores de serviços",
    description:
      "Acompanhamento de serviços e produtos oferecidos por terceiros",
    icon: <FaTools size={44} />,
  },
  {
    id: 8,
    name: "Service Desk / Help Desk",
    description:
      "Central de Serviços destinada ao esclarecimento de dúvidas e problemas, registro de reclamações, requisição, operação, estratégia e melhoria continua de serviços.",
    icon: <FaHeadset size={44} />,
  },
  {
    id: 9,
    name: "Consultoria em ERP",
    description: "Avaliação do(s) Sistema(s) ERP utilizado com o objetivo de identificar módulos obsoletos, recursos não utilizados e/ou subutilizados, recursos não implementados, falhas na utilização, incapacidade técnica e todo e qualquer item que gere um impacto negativo na empresa.",
    icon: <FaUserCog size={44} />,

  }
];

export default services;
