type TransactionPageProps = {
  params: {
    id: string;
  };
};

const Transaction = ({ params: { id } }: TransactionPageProps) => {
  return <h1>Olhao {id}</h1>;
};

export default Transaction;