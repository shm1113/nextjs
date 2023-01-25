export function Count2({up}) {
    return <>
      1<input type="button" value="-"></input>
      {up ? <input type="button" value="+"></input> : null}
    </>
  }
  