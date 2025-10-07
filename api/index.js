import axios from "axios";

const headerJson = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: "https://aos-2025-2-theta.vercel.app",
  timeout: 1000,
});

export async function getTarefas() {
  const { data } = await instance.get("/tarefas");
  return data?.data;
}

export async function updateTarefa(tarefa) {
  const { data } = await instance.put(
    `/tarefas/${tarefa.id}`,
    { descricao: tarefa.descricao, concluida: tarefa.concluida },
    { headers: headerJson }
  );
  return data;
}

export async function addTarefa({ descricao }) {
  const { data } = await instance.post(
    `/tarefas`,
    { descricao },
    { headers: headerJson }
  );
  return data;
}

export async function deleteTarefa(tarefa) {
  const { data } = await instance.delete(`/tarefas/${tarefa.id}`);
  return data;
}
