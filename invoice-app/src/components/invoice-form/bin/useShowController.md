


stała {
         basePath,      // wywnioskowane z lokalizacji, przydatne dla przycisków akcji
         defaultTitle,  // przetłumaczony tytuł na podstawie zasobu, np. „Post #123”
         błąd,          // błąd zwracany przez dataProvider, gdy nie udało się pobrać rekordu. Przydatne, jeśli          //   chcesz dostosować widok zamiast po prostu wyświetlać powiadomienie przy użyciu
                        //    efektu ubocznego „onFailure”.
         załadowany,    // wartość logiczna, która jest fałszem, dopóki rekord nie będzie dostępny
         ładowanie,     // wartość logiczna, która jest prawdziwa przy montowaniu i fałszywa po pobraniu rekordu
         rekord,        // rekord pobrany przez dataProvider.getOne() na podstawie identyfikatora z lokalizacji
         zasób,         // nazwa zasobu wywnioskowana z lokalizacji. np. „posty”
         wersja,        // liczba całkowita używana przez funkcję odświeżania
     } = useShowController(props);
     powrót (
         <div>



         const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
        error,  // error returned by dataProvider when it failed to fetch the record. Useful if you want to adapt the view instead of just showing a notification using the `onFailure` side effect.
        loaded, // boolean that is false until the record is available
        loading, // boolean that is true on mount, and false once the record was fetched
        record, // record fetched via dataProvider.getOne() based on the id from the location
        resource, // the resource name, deduced from the location. e.g. 'posts'
        version, // integer used by the refresh feature
    } = useShowController(props);
    return (