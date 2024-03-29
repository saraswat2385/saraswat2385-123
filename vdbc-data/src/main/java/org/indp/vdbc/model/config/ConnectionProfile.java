package org.indp.vdbc.model.config;

import org.indp.vdbc.model.DataSourceAdapter;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import java.io.Serializable;

/**
 *
 */
@XmlAccessorType(XmlAccessType.NONE)
public abstract class ConnectionProfile implements Serializable {

    @XmlAttribute
    private String name;

    public abstract String getConnectionPresentationString();

    public abstract DataSourceAdapter createDataSourceAdapter();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
