import React from 'react';
import s from './filter.module.scss';


class Filters extends React.Component {
  getStatus() {
    const arr = [];
    this.props.checkState.status.forEach((s) => {
      if (s.stat) {
        arr.push(s.stop);
      }
    });
    return arr;
  }

  render() {
    return (
      <div className={s.filter}>
        <span className={s.title}>количество пересадок</span>

        <label className={s.allCheck}>
          <input
            className={s.allCheckCheckbox}
            type="checkbox"
            onClick={() => {
              if (!this.props.checkState.all) {
                this.props.allCheckboxOf();
              } else {
                this.props.allCheckboxOn();
              }
              this.props.clickToAll();
            }}
            checked={this.props.checkState.all ? 'checked' : ''}
          />
          <i />
          <span>Все</span>
        </label>

        <label className={s.withoutStops}>
          <input
            className={s.checkbox}
            type="checkbox"
            onClick={() => {
              this.props.clickToAnyCheckbox(0);
              this.props.updateTicket(this.getStatus());
            }}
            checked={this.props.checkState.status[0].stat ? 'checked' : ''}
          />
          <i />
          <span>Без пересадок</span>
        </label>

        <label className={s.oneStops}>
          <input
            className={s.checkbox}
            type="checkbox"
            onClick={() => {
              this.props.clickToAnyCheckbox(1);
              this.props.updateTicket(this.getStatus());
            }}
            checked={this.props.checkState.status[1].stat ? 'checked' : ''}
          />
          <i />
          <span>1 пересадка</span>
        </label>

        <label className={s.twoStops}>
          <input
            className={s.checkbox}
            type="checkbox"
            onClick={() => {
              this.props.clickToAnyCheckbox(2);
              this.props.updateTicket(this.getStatus());
            }}
            checked={this.props.checkState.status[2].stat ? 'checked' : ''}
          />
          <i />
          <span>2 пересадки</span>
        </label>

        <label className={s.twoStops}>
          <input
            className={s.checkbox}
            type="checkbox"
            onClick={() => {
              this.props.clickToAnyCheckbox(3);
              this.props.updateTicket(this.getStatus());
            }}
            checked={this.props.checkState.status[3].stat ? 'checked' : ''}
          />
          <i />
          <span>3 пересадки</span>
        </label>
      </div>
    );
  }
}


export default Filters;
