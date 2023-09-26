import axios from 'axios';
import { useCallback, useEffect, useState } from "react";

const useGetRepositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [ error, setErro ] = useState(false);

  const getAllList = useCallback(
    async () => {
      axios.get(`https://api.github.com/users/brunosilva/repos`)
          .then(response => {
            setRepositories(response.data);
          })
          .catch(err => {
            console.error(err);
            setErro(true);
          });
      return null
    },
    []
  )

  useEffect(() => {
    getAllList()
  }, [getAllList])

  return {
    repositories,
    error
  }
}

export default useGetRepositories