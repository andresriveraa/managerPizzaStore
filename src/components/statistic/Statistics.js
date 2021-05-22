
import React from 'react'
import { Statistic, Row, Col, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Collapse } from 'antd';
const { Panel } = Collapse
export default function Statistics() {
  const pizzaName = '0ddd'
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Clients today" value={0} />
        </Col>
        <Col span={8}>
          <Statistic title="Clients month" value={0} />
        </Col>
        <Col span={8}>
          <Statistic title="Clients year" value={0} />
        </Col>
      </Row>
      <Title level={2}>Pizzas vendidas</Title>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="This is panel header 1" key="1">
            <p>{pizzaName}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{pizzaName}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{pizzaName}</p>
          </Panel>
        </Collapse>
    </div>
  )
}
