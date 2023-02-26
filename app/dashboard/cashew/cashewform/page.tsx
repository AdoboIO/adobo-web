export default function Page() {
    return (
      <form action="api/cashew" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>
          <label htmlFor="contact">Contact Number</label>
          <input type="text" id="contact" name="contact"/>
          <label htmlFor="alternateContact">Alternate Contact Number</label>
          <input type="text" id="alternateContact" name="alternateContact"/>
      </form>
    );
}
