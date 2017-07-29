

    let menuItems;
    if(this.props.menu) {
      menuItems = this.props.menu.map(menuitem => {
        return (
          <MenuItem onAddItem={this.addItem.bind(this)} key={menuitem.id} menuitem={menuitem}/>
        )
      });
    }

    let ticketItems = this.props.activeOrder;
    console.log(ticketItems);
    let ticketOutput = ticketItems.map((ticketItem, key) => {
      <li key={key}>
        <span>{ticketItem[key].title}</span>
      </li>;
    });

    var ticket = this.props.activeOrder;
    var output = [];
    var output = ticket.map(ticketItems => {
      return (
        ticketItems.map(ticketItem => {
          return (
            <TicketItem key={ticketItem.id} ticketItem={ticketItem} />
          )
        })
      )
    })
    ticketItems = this.props.activeOrder.map(ticketItem => {
      return (
        <TicketItem onDeleteItem={this.deleteItem.bind(this)} key={ticketItem.id} ticketItem={ticketItem} />
      )
    });

    return (
      <div className="ActiveOrder">
        <div className="Menu">
          <div className="MenuList">
            {menuItems}
          </div>
        </div>
        <div className="Ticket">
          <h2 className="heading">Ticket</h2>
          <div className="TicketList">
            {ticketOutput}
          </div>
        </div>
      </div>
    );

<li className="TicketItem">
  <span className="TicketItemName">{this.props.ticketItem.title}</span>
  <a className="TicketItemMinus" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.id)}>&minus;</a>
  <span className="TicketItemQty">1</span>
  <a className="TicketItemPlus" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.id)}>&#43;</a>
  <span className="TicketItemPrice">{this.props.ticketItem.price}</span>
  <a className="TicketItemDelete" href="#;" onClick={this.deleteTicketItem.bind(this, this.props.ticketItem.id)}>&times;</a>
</li>