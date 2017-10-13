/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classnames from 'classnames';
import List from '../list';
import Radio from '../radio';
import Checkbox from '../checkbox';

export default function SubMenu(props) {
  const onClick = (dataItem) => {
    if (props.onSel) {
      props.onSel(dataItem);
    }
  };

  const { subMenuPrefixCls, radioPrefixCls, subMenuData, showSelect, selItem, multiSelect } = props;
  const selected = dataItem => (showSelect && (selItem.length > 0 && selItem.indexOf(dataItem.value) !== -1));

  const ItemComponent = !multiSelect ? Radio : Checkbox;

  return (
    <List style={{ paddingTop: 0 }} className={subMenuPrefixCls}>
      {subMenuData.map((dataItem, idx) => (
        <List.Item
          className={classnames(`${radioPrefixCls}-item`, {
            [`${subMenuPrefixCls}-item-selected`]: selected(dataItem),
            [`${subMenuPrefixCls}-item-disabled`]: dataItem.disabled,
          })}
          key={idx}
          extra={<ItemComponent
            checked={selected(dataItem)}
            disabled={dataItem.disabled}
            onChange={() => onClick(dataItem)}
          />}
        >
          {dataItem.label}
        </List.Item>
      ))}
    </List>
  );
}