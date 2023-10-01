import { useState } from "react";
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
  whatsapp: z.number(),
  motivo: z.string().nonempty('O motivo é obrigatório'),
  email: z.string().email('Formato de email incorreto. Revise para torná-lo válido.'),
  linkedin: z.refine((url) => {
    const urlRegex = /^(https?|ftp|):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  }, {
    message: 'Por favor, forneça uma URL válida.',
  })
})

const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    motivo: "",
    email: "",
    linkedin: "",
  });
  const { register, handleSubmit } = useForm({ resolver: zodResolver(contactFormSchema) })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <form action="https://formsubmit.co/rafinhacrisdenlavor@gmail.com" method="POST" className={styles.formWrapper}>
      <h1>Formulário</h1>
      <label>
        Nome completo
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Ex: Maria Jose da Silva"
          required
        />
      </label>

      <label>
        WhatsApp
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="Ex: 1199990000"
          required
        />
      </label>

      <label>
        Motivo do contato
        <textarea
          name="motivo"
          value={formData.motivo}
          onChange={handleChange}
          placeholder="Ex: Olá, gostaria de agendar uma reunião para discutir sobre a construção de um projeto.."
          required
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ex: email@email.com"
        />
      </label>

      <label>
        Perfil no LinkedIn
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Ex: https://www.linkedin.com/in/rafaella-denlavor/"
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
