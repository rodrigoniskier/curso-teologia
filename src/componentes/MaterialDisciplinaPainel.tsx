import { useEffect, useState } from 'react';
import { carregarMaterialDisciplina } from '../infra/carregar-material-disciplina';
import type { MaterialDisciplina as TMaterialDisciplina } from '../tipos';
import { MaterialDisciplina } from './MaterialDisciplina';

export function MaterialDisciplinaPainel({ codigo }: { codigo: string }) {
  const [material, setMaterial] = useState<TMaterialDisciplina>();

  useEffect(() => {
    let ativo = true;
    setMaterial(undefined);
    void carregarMaterialDisciplina(codigo)
      .then((m) => { if (ativo) setMaterial(m); })
      .catch((erro: unknown) => console.error(erro));
    return () => { ativo = false; };
  }, [codigo]);

  if (!material) return null;
  return <MaterialDisciplina material={material} />;
}
