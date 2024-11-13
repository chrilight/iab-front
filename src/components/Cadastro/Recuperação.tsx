import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PasswordRecovery: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
        
    }),
    onSubmit: async (values) => {
      try {
        // Lógica para enviar e-mail de recuperação
        console.log('Email enviado para:', values.email);
        alert('Verifique seu e-mail para recuperar a senha.');
      } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
      }
    },
  });

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Recuperação de Senha</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{
              width: '100%',
              padding: '8px',
              margin: '8px 0',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Enviar Instruções
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
