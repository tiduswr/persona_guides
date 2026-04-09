import { useEffect, useState } from 'react';

/**
 * Hook para atrasar a atualização de um valor.
 * Muito útil para inputs de busca que disparam chamadas de API.
 * * @param value O valor que será monitorado (ex: string da busca)
 * @param delay O tempo de espera em milissegundos (padrão: 500ms)
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Define um timer para atualizar o valor após o delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpa o timer se o valor mudar antes do tempo acabar
    // ou se o componente for desmontado
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}