export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diasAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diasAgora) !== -1;
  console.log(`dia semana ' ${semanaAberto}`);
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  console.log(`horario ' ${horarioAberto}`);

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
